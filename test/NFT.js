const { expect } = require("chai")
const {MerkleTree} = require("merkletreejs")
const keccak256 = require("keccak256")

  describe("NFT", function () {
    this.beforeAll(async function() {
      /**
       * @dev initialize wallet instances
       * act as users of smart contracts
       */
      const [owner, addr2, addr3, addr4, addr5, addr6, addr7] = await ethers.getSigners()
      this.owner = owner
      this.addr2 = addr2
      this.addr3 = addr3
      this.addr4 = addr4
      this.addr5 = addr5
      this.addr6 = addr6
      this.addr7 = addr7

      this.price = '10000000000000000'
      this.baseURI = 'https://ballparkpunks.api/get_metadata?typeId='

      this.NFT = await ethers.getContractFactory("NFT")
      this.nft = await this.NFT.deploy('BallParkPunks', 'BPP', '10000000000000000', this.baseURI)
      await this.nft.createType("Super Sluggers", this.price, 10)
    })

    describe("Metadata", function () {
      it('returns correct metadata', async function () {
        await this.nft.mint(0, 1, {value: this.price})
        const tokenId = 0

        const tokenuri = await this.nft.tokenURI(tokenId)
        await expect(tokenuri).to.equal(`${this.baseURI}${0}&tokenId=${tokenId}`)
      })
    })

  describe("Mint", async function () {
    it('allows public mint for correct price', async function () {
      expect(await this.nft.mint(0, 1, {value: this.price})).to.emit('Transfer')
    })

    it('enforces correct price', async function () {
      // value < price case
      await expect(this.nft.mint(0,1,{value: 0})).to.be.revertedWith("NFT: incorrect amount of ETH sent")

      // value > price case
      await expect(this.nft.mint(0,1,{value: (parseInt(this.price) * 2).toString()})).to.be.revertedWith("NFT: incorrect amount of ETH sent")
    })

    it('allows owner/admin to increase max supply', async function () {
      const increaseBy = 1
      const beforeSupply = (await this.nft.types(0)).maxSupply

      await this.nft.increaseMaxSupply(0, increaseBy)

      expect((await this.nft.types(0)).maxSupply).to.equal(parseInt(beforeSupply) + increaseBy)
    })

    it('enforces max supply', async function () {
      const expectedPrice = parseInt(this.price) * 11
      await expect(this.nft.mint(0, 11, {value: expectedPrice.toString()})).to.be.revertedWith("NFT: exceeds max supply")
    })

  })

  describe('Security', async function () {
    it('does not allow non owner to call ownerMint', async function () {
        await expect(this.nft.connect(this.addr2).ownerMint(0, 1, this.addr2.address)).to.be.revertedWith('Ownable: caller is not the owner')
    })

    it('does not allow non owner to withdraw', async function () {
        await expect(this.nft.connect(this.addr2).withdraw(1,this.addr2.address)).to.be.revertedWith('Ownable: caller is not the owner')
    })

    it('does not allow non owner/admin to set URI', async function () {
        await expect(this.nft.connect(this.addr2).setURI('test URI')).to.be.revertedWith('OnlyAdmin: sender is not admin or owner')
    })

    it('does not allow non owner to transfer ownership', async function () {
      await expect(this.nft.connect(this.addr4).transferOwnership(this.addr4.address)).to.be.revertedWith('Ownable: caller is not the owner')
    })

    it('does not allow non owner/admin to set price', async function () {
      await expect(this.nft.connect(this.addr4).setPrice(0,0)).to.be.revertedWith('OnlyAdmin: sender is not admin or owner')
    })

    it('does not allow non owner/admin to increase max supply', async function () {
      await expect(this.nft.connect(this.addr4).increaseMaxSupply(0, 1000)).to.be.revertedWith('OnlyAdmin: sender is not admin or owner')
    })

    //createType(string calldata _name, uint256 _price, uint256 supply)
    it('does not allow non owner/admin to create new type', async function () {
      await expect(this.nft.connect(this.addr4).createType("Test Name", 0, 100)).to.be.revertedWith('OnlyAdmin: sender is not admin or owner')
    })
  })
})
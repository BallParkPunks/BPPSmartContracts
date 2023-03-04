# BPP Smart Contracts
```    
  NFT
    Metadata
      ✓ returns correct metadata
    Mint
      ✓ allows public mint for correct price
      ✓ enforces correct price
      ✓ allows owner/admin to increase max supply
      ✓ enforces max supply
    Security
      ✓ does not allow non owner to call ownerMint
      ✓ does not allow non owner to withdraw
      ✓ does not allow non owner/admin to set URI
      ✓ does not allow non owner to transfer ownership
      ✓ does not allow non owner/admin to set price
      ✓ does not allow non owner/admin to increase max supply
      ✓ does not allow non owner/admin to create new type

·----------------------------------|----------------------------|-------------|-----------------------------·
|       Solc version: 0.8.9        ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 30000000 gas  │
···································|····························|·············|······························
|  Methods                         ·               99 gwei/gas                ·       1.17 usd/matic        │
·············|·····················|··············|·············|·············|···············|··············
|  Contract  ·  Method             ·  Min         ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·············|·····················|··············|·············|·············|···············|··············
|  NFT       ·  createType         ·           -  ·          -  ·     119011  ·            1  ·       0.01  │
·············|·····················|··············|·············|·············|···············|··············
|  NFT       ·  increaseMaxSupply  ·           -  ·          -  ·      31712  ·            1  ·       0.00  │
·············|·····················|··············|·············|·············|···············|··············
|  NFT       ·  mint               ·      101616  ·     133016  ·     112083  ·            3  ·       0.01  │
·············|·····················|··············|·············|·············|···············|··············
|  Deployments                     ·                                          ·  % of limit   ·             │
···································|··············|·············|·············|···············|··············
|  NFT                             ·           -  ·          -  ·    3324207  ·       11.1 %  ·       0.39  │
·----------------------------------|--------------|-------------|-------------|---------------|-------------·

  12 passing (2s)
  ```
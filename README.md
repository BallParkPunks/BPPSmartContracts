# BPP Smart Contracts
```    
  NFT
    Deployment
      ✓ deploys correctly
      ✓ initializes state to closed
    Mint
      ✓ allows public mint for correct price
      ✓ enforces correct price in public state
      ✓ owner can add to whitelist
      ✓ whitelisted address can mint for whitelist price
      ✓ enforces whitelist only when in state 1
      ✓ enforces correct price in whitelist only state (1)
      ✓ allows whitelist mint when in state 1
      ✓ allows owner/admin to increase max supply
    Security
      ✓ does not allow non owner to call ownerMint
      ✓ does not allow non owner to withdraw
      ✓ does not allow non owner/admin to set URI
      ✓ does not allow non owner/admin to set state
      ✓ does not allow non owner/admin to set alRoot
      ✓ does not allow non owner to transfer ownership
      ✓ does not allow non owner/admin to set price
      ✓ does not allow non owner/admin to set allow list price
      ✓ does not allow non owner/admin to increase max supply

·----------------------------------|----------------------------|-------------|-----------------------------·
|       Solc version: 0.8.9        ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 30000000 gas  │
···································|····························|·············|······························
|  Methods                         ·               87 gwei/gas                ·       1.17 usd/matic        │
·············|·····················|··············|·············|·············|···············|··············
|  Contract  ·  Method             ·  Min         ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·············|·····················|··············|·············|·············|···············|··············
|  NFT       ·  increaseMaxSupply  ·           -  ·          -  ·      29215  ·            1  ·       0.00  │
·············|·····················|··············|·············|·············|···············|··············
|  NFT       ·  mint               ·       74307  ·      95337  ·      88291  ·            6  ·       0.01  │
·············|·····················|··············|·············|·············|···············|··············
|  NFT       ·  setALRoot          ·           -  ·          -  ·      46501  ·            1  ·       0.00  │
·············|·····················|··············|·············|·············|···············|··············
|  NFT       ·  setState           ·       30368  ·      47468  ·      38918  ·            2  ·       0.00  │
·············|·····················|··············|·············|·············|···············|··············
|  Deployments                     ·                                          ·  % of limit   ·             │
···································|··············|·············|·············|···············|··············
|  NFT                             ·           -  ·          -  ·    3654186  ·       12.2 %  ·       0.37  │
·----------------------------------|--------------|-------------|-------------|---------------|-------------·

  19 passing (2s)
  ```
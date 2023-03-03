# BPP Smart Contracts
```  NFT
    Deployment
      ✓ deploys correctly
      ✓ initializes state to closed
    Mint
      ✓ allows public mint for correct price
      ✓ owner can add to whitelist
      ✓ whitelisted address can mint for whitelist price
      ✓ enforces whitelist only when in state 1
      ✓ allows whitelist mint when in state 1
    Security
      ✓ does not allow non owner to call ownerMint
      ✓ does not allow non owner to withdraw
      ✓ does not allow non owner/admin to set URI
      ✓ does not allow non owner/admin to set state
      ✓ does not allow non owner/admin to set alRoot
      ✓ does not allow non owner to transfer ownership
      ✓ does not allow non owner/admin to set price
      ✓ does not allow non owner/admin to set allow list price

·--------------------------|----------------------------|-------------|-----------------------------·
|   Solc version: 0.8.9    ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 30000000 gas  │
···························|····························|·············|······························
|  Methods                 ·               87 gwei/gas                ·       1.22 usd/matic        │
·············|·············|··············|·············|·············|···············|··············
|  Contract  ·  Method     ·  Min         ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·············|·············|··············|·············|·············|···············|··············
|  NFT       ·  mint       ·       74307  ·      95337  ·      88291  ·            6  ·       0.01  │
·············|·············|··············|·············|·············|···············|··············
|  NFT       ·  setALRoot  ·           -  ·          -  ·      46501  ·            1  ·       0.00  │
·············|·············|··············|·············|·············|···············|··············
|  NFT       ·  setState   ·       30346  ·      47446  ·      38896  ·            2  ·       0.00  │
·············|·············|··············|·············|·············|···············|··············
|  Deployments             ·                                          ·  % of limit   ·             │
···························|··············|·············|·············|···············|··············
|  NFT                     ·           -  ·          -  ·    3590808  ·         12 %  ·       0.38  │
·--------------------------|--------------|-------------|-------------|---------------|-------------·

  15 passing (2s)
  ```
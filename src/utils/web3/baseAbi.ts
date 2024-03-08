export const baseAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes32", name: "neededRole", type: "bytes32" }
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error"
  },
  { inputs: [], name: "AlreadyRegistered", type: "error" },
  { inputs: [], name: "AmountMoreThanShare", type: "error" },
  { inputs: [], name: "DomainExpired", type: "error" },
  { inputs: [], name: "DomainExpiredButNotBurned", type: "error" },
  { inputs: [], name: "DomainIn30dayPeriod", type: "error" },
  { inputs: [], name: "DomainIsProtected", type: "error" },
  { inputs: [], name: "DomainNotExpired", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "address", name: "owner", type: "address" }
    ],
    name: "ERC721IncorrectOwner",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" }
    ],
    name: "ERC721InsufficientApproval",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "approver", type: "address" }],
    name: "ERC721InvalidApprover",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "operator", type: "address" }],
    name: "ERC721InvalidOperator",
    type: "error"
  },
  { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "ERC721InvalidOwner", type: "error" },
  {
    inputs: [{ internalType: "address", name: "receiver", type: "address" }],
    name: "ERC721InvalidReceiver",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "ERC721InvalidSender",
    type: "error"
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ERC721NonexistentToken",
    type: "error"
  },
  { inputs: [], name: "EnforcedPause", type: "error" },
  { inputs: [], name: "ExpectedPause", type: "error" },
  { inputs: [], name: "InvalidAddress", type: "error" },
  { inputs: [], name: "InvalidExpiry", type: "error" },
  { inputs: [], name: "InvalidLength", type: "error" },
  { inputs: [], name: "LengthsDoNotMatch", type: "error" },
  { inputs: [], name: "NoCredits", type: "error" },
  { inputs: [], name: "NotEnoughCredits", type: "error" },
  { inputs: [], name: "NotEnoughNativeTokenPaid", type: "error" },
  { inputs: [], name: "NotOwner", type: "error" },
  { inputs: [], name: "NotOwnerOfToken", type: "error" },
  { inputs: [], name: "NotPartner", type: "error" },
  { inputs: [], name: "NotRegistered", type: "error" },
  { inputs: [], name: "PriceCannotBeZero", type: "error" },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  { inputs: [], name: "RefferalEarningCannotBeCalculated", type: "error" },
  { inputs: [], name: "SelfReferral", type: "error" },
  { inputs: [], name: "cannotBeMoreThan100Percent", type: "error" },
  { inputs: [], name: "domainIsProtected", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "owner", type: "address" },
      { indexed: true, internalType: "address", name: "approved", type: "address" },
      { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "owner", type: "address" },
      { indexed: true, internalType: "address", name: "operator", type: "address" },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "_fromTokenId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "_toTokenId", type: "uint256" }
    ],
    name: "BatchMetadataUpdate",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "MetadataUpdate",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string[]", name: "domainNames", type: "string[]" },
      { indexed: false, internalType: "uint256[]", name: "tokenId", type: "uint256[]" }
    ],
    name: "Minted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      { indexed: true, internalType: "bytes32", name: "previousAdminRole", type: "bytes32" },
      { indexed: true, internalType: "bytes32", name: "newAdminRole", type: "bytes32" }
    ],
    name: "RoleAdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      { indexed: true, internalType: "address", name: "account", type: "address" },
      { indexed: true, internalType: "address", name: "sender", type: "address" }
    ],
    name: "RoleGranted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      { indexed: true, internalType: "address", name: "account", type: "address" },
      { indexed: true, internalType: "address", name: "sender", type: "address" }
    ],
    name: "RoleRevoked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }],
    name: "Unpaused",
    type: "event"
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAINTAINER_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TLD",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "price", type: "uint256" },
      { internalType: "uint256", name: "bips", type: "uint256" }
    ],
    name: "calculateActualFromBIPS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "checkDomainStatus",
    outputs: [{ internalType: "enum ZNSRegistrySepolia.domainStatus", name: "status", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "domainLookup",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOraclePrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "referral", type: "address" }],
    name: "getReferralBand",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" }
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" }
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" }
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "partnerReferrals",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint16", name: "len", type: "uint16" }],
    name: "priceToRegister",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint16", name: "len", type: "uint16" }],
    name: "priceToRenew",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "protectedDomains",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "string[]", name: "domainNames", type: "string[]" },
      { internalType: "uint256[]", name: "expiries", type: "uint256[]" },
      { internalType: "address", name: "referral", type: "address" }
    ],
    name: "registerDomains",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "registryLookupById",
    outputs: [
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "string", name: "domainName", type: "string" },
          { internalType: "uint16", name: "lengthOfDomain", type: "uint16" },
          { internalType: "uint256", name: "expirationDate", type: "uint256" }
        ],
        internalType: "struct ZNSRegistrySepolia.RegistryData",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "string", name: "domainName", type: "string" }],
    name: "registryLookupByName",
    outputs: [
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "string", name: "domainName", type: "string" },
          { internalType: "uint16", name: "lengthOfDomain", type: "uint16" },
          { internalType: "uint256", name: "expirationDate", type: "uint256" }
        ],
        internalType: "struct ZNSRegistrySepolia.RegistryData",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "callerConfirmation", type: "address" }
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" }
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256[5]", name: "_domainPricing", type: "uint256[5]" }],
    name: "setDomainPricing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_oracleAddress", type: "address" }],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "referral", type: "address" },
      { internalType: "uint256", name: "sharePercent", type: "uint256" }
    ],
    name: "setPartnerReferral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address[]", name: "_partners", type: "address[]" },
      { internalType: "uint256[]", name: "_percentages", type: "uint256[]" }
    ],
    name: "setProfitSharingData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256[5]", name: "_ticks", type: "uint256[5]" }],
    name: "setReferTicks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "userLookupByAddress",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "primaryDomain", type: "uint256" },
          { internalType: "uint256[]", name: "allOwnedDomains", type: "uint256[]" },
          { internalType: "uint256", name: "numberOfReferrals", type: "uint256" },
          { internalType: "uint256", name: "totalEarnings", type: "uint256" }
        ],
        internalType: "struct ZNSRegistrySepolia.UserConfig",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

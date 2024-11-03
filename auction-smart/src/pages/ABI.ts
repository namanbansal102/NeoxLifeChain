[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_hName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_imgUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_manager",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			}
		],
		"name": "addHospital",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "u_add",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_expiryDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_recordUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_rstatus",
				"type": "string"
			}
		],
		"name": "addUserData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "accessers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fetchUserProfile",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "h_address",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "u_address",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "userId",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "rId",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "date",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "expiry",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "recordUrl",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "r_status",
								"type": "string"
							}
						],
						"internalType": "struct PRH.record[]",
						"name": "records",
						"type": "tuple[]"
					}
				],
				"internalType": "struct PRH.user",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "h_map",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hospitals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "hId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "hospitalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imgUrl",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "nRecords",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "manager",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "u_map",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewhospitals",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "hId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "hospitalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imgUrl",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "nRecords",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "manager",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phone",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "h_address",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "u_address",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "userId",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "uint256",
										"name": "rId",
										"type": "uint256"
									},
									{
										"internalType": "string",
										"name": "date",
										"type": "string"
									},
									{
										"internalType": "string",
										"name": "expiry",
										"type": "string"
									},
									{
										"internalType": "string",
										"name": "recordUrl",
										"type": "string"
									},
									{
										"internalType": "string",
										"name": "r_status",
										"type": "string"
									}
								],
								"internalType": "struct PRH.record[]",
								"name": "records",
								"type": "tuple[]"
							}
						],
						"internalType": "struct PRH.user[]",
						"name": "users",
						"type": "tuple[]"
					}
				],
				"internalType": "struct PRH.hospital[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
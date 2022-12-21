export const filterData = [
	{
		items: [
			{ name: 'Comprar', value: 'for-sale' },
			{ name: 'Alquiler', value: 'for-rent' },
		],
		placeholder: 'Propósito',
		queryName: 'purpose',
	},
	{
		items: [
			{ name: 'Diario', value: 'daily' },
			{ name: 'Semanal', value: 'weekly' },
			{ name: 'Mensual', value: 'monthly' },
			{ name: 'Anual', value: 'yearly' },
		],
		placeholder: 'Frecuencia de alquiler',
		queryName: 'rentFrequency',
	},
	{
		items: [
			{ name: '10,000', value: '10000' },
			{ name: '20,000', value: '20000' },
			{ name: '30,000', value: '30000' },
			{ name: '40,000', value: '40000' },
			{ name: '50,000', value: '50000' },
			{ name: '60,000', value: '60000' },
			{ name: '85,000', value: '85000' },
		],
		placeholder: 'Precio mínimo (AED)',
		queryName: 'minPrice',
	},
	{
		items: [
			{ name: '50,000', value: '50000' },
			{ name: '60,000', value: '60000' },
			{ name: '85,000', value: '85000' },
			{ name: '110,000', value: '110000' },
			{ name: '135,000', value: '135000' },
			{ name: '160,000', value: '160000' },
			{ name: '185,000', value: '185000' },
			{ name: '200,000', value: '200000' },
			{ name: '300,000', value: '300000' },
			{ name: '400,000', value: '400000' },
			{ name: '500,000', value: '500000' },
			{ name: '600,000', value: '600000' },
			{ name: '700,000', value: '700000' },
			{ name: '800,000', value: '800000' },
			{ name: '900,000', value: '900000' },
			{ name: '1000,000', value: '1000000' },
		],
		placeholder: 'Precio máximo (AED)',
		queryName: 'maxPrice',
	},
	{
		items: [
			{ name: 'Precio mas bajo', value: 'price-asc' },
			{ name: 'Precio más alto', value: 'price-des' },
			{ name: 'Más nuevo', value: 'date-asc' },
			{ name: 'Más antiguo', value: 'date-desc' },
			{ name: 'Verificado', value: 'verified-score' },
			{ name: 'Puntuación de nivel de ciudad', value: 'city-level-score' },
		],
		placeholder: 'Clasificar',
		queryName: 'sort',
	},
	{
		items: [
			{ name: '1000', value: '1000' },
			{ name: '2000', value: '2000' },
			{ name: '3000', value: '3000' },
			{ name: '4000', value: '4000' },
			{ name: '5000', value: '5000' },
			{ name: '10000', value: '10000' },
			{ name: '20000', value: '20000' },
		],
		placeholder: 'Área máxima (pies2)',
		queryName: 'areaMax',
	},
	{
		items: [
			{ name: '1', value: '1' },
			{ name: '2', value: '2' },
			{ name: '3', value: '3' },
			{ name: '4', value: '4' },
			{ name: '5', value: '5' },
			{ name: '6', value: '6' },
			{ name: '7', value: '7' },
			{ name: '8', value: '8' },
			{ name: '9', value: '9' },
			{ name: '10', value: '10' },
		],
		placeholder: 'Habitaciones',
		queryName: 'roomsMin',
	},
	{
		items: [
			{ name: '1', value: '1' },
			{ name: '2', value: '2' },
			{ name: '3', value: '3' },
			{ name: '4', value: '4' },
			{ name: '5', value: '5' },
			{ name: '6', value: '6' },
			{ name: '7', value: '7' },
			{ name: '8', value: '8' },
			{ name: '9', value: '9' },
			{ name: '10', value: '10' },
		],
		placeholder: 'Baños',
		queryName: 'bathsMin',
	},
	{
		items: [
			{ name: 'Amueblado', value: 'furnished' },
			{ name: 'Sin amueblar', value: 'unfurnished' },
		],
		placeholder: 'Tipo de mobiliario',
		queryName: 'furnishingStatus',
	},
	{
		items: [
			{ name: 'Apartamento', value: '4' },
			{ name: 'Adosados', value: '16' },
			{ name: 'Villas', value: '3' },
			{ name: 'Áticos', value: '18' },
			{ name: 'Apartamentos Hoteleros', value: '21' },
			{ name: 'Complejo de Villas', value: '19' },
			{ name: 'Terreno Residencial', value: '14' },
			{ name: 'Piso Residencial', value: '12' },
			{ name: 'Edificio Residencial', value: '17' },
		],
		placeholder: 'Tipo de Propiedad',
		queryName: 'categoryExternalID',
	},
];

export const getFilterValues = (filterValues) => {
	const {
		purpose,
		rentFrequency,
		categoryExternalID,
		minPrice,
		maxPrice,
		areaMax,
		roomsMin,
		bathsMin,
		sort,
		locationExternalIDs,
	} = filterValues;

	const values = [
		{
			name: 'purpose',
			value: purpose,
		},
		{
			name: 'rentFrequency',
			value: rentFrequency,
		},
		{
			name: 'minPrice',
			value: minPrice,
		},
		{
			name: 'maxPrice',
			value: maxPrice,
		},
		{
			name: 'areaMax',
			value: areaMax,
		},
		{
			name: 'roomsMin',
			value: roomsMin,
		},
		{
			name: 'bathsMin',
			value: bathsMin,
		},
		{
			name: 'sort',
			value: sort,
		},
		{
			name: 'locationExternalIDs',
			value: locationExternalIDs,
		},
		{
			name: 'categoryExternalID',
			value: categoryExternalID,
		},
	];

	return values;
};
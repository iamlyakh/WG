const initialState =  {
	users: [
	    {
			id: 1,
			name: 'User1',
            battlesTotal: 9888,
            winsTotal: 24,
            daysTotal: 755,
            vehicleX: 1123,
            expAvg: 435,
            expTotal: 90023200,
            isHidden: false
		},
        {
            id: 2,
            name: 'SuperGod',
            battlesTotal: 1234,
            winsTotal: 1022323,
            daysTotal: 654,
            vehicleX: 122,
            expAvg: 866,
            expTotal: 42345555334,
            isHidden: false
        }, {
			id: 3,
			name: 'Petya228',
			battlesTotal: 123441,
			winsTotal: 23424,
			daysTotal: 123,
			vehicleX: 42,
			expAvg: 866,
			expTotal: 3945,
			isHidden: false
		}, {
			id: 4,
			name: 'FyourM',
			battlesTotal: 228,
			winsTotal: 666,
			daysTotal: 144,
			vehicleX: 14,
			expAvg: 866,
			expTotal: 2446,
			isHidden: false
		}, {
			id: 5,
			name: 'AG',
			battlesTotal: 1488,
			winsTotal: 345,
			daysTotal: 756,
			vehicleX: 12,
			expAvg: 456,
			expTotal: 13,
			isHidden: false
		}
    ],
    columns: [
        {
            id: 'name',
            label: 'Имя пользователя'
        },
        {
            id: 'battlesTotal',
            label: 'Боев'
        },
        {
            id: 'winsTotal',
            label: 'Побед'
        },
        {
            id: 'daysTotal',
            label: 'Дней в игре'
        },
        {
            id: 'rating',
            label: 'Рейтинг'
        },
        {
            id: 'vehicleX',
            label: 'Техники 10ого уровня'
        },
        {
            id: 'expAvg',
            label: 'Среднее количество опыта'
        },
        {
            id: 'expTotal',
            label: 'Всего опыта'
        }
    ]
};

export default initialState;

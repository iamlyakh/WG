const initialState =  {
	users: [
	    {
			id: 1,
			name: 'SuperPetia228',
            battlesTotal: 9888,
            winsTotal: 72,
            daysTotal: 999,
            vehicleX: 26,
            expAvg: 430,
            expTotal: 90023200,
            isHidden: false,
            createdAt: '01/02/2009'
		},
        {
            id: 2,
            name: 'Dimas1945',
            battlesTotal: 9888,
            winsTotal: 1022323,
            daysTotal: 999,
            vehicleX: 26,
            expAvg: 430,
            expTotal: 90023200,
            isHidden: false,
            createdAt: '01/02/2009'
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
        },
        {
            id: 'createdAt',
            label: 'Дата регистрации'
        }
    ]
};

export default initialState;

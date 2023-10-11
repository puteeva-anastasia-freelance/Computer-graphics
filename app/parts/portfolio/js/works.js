'use strict';

const works = [
	new WorkDTO(
		0,
		'2020. Визуальные эффекты для фильма &laquo;Gold dust&raquo;',
		'10.jpg',
		'https://www.youtube.com/embed/biyb9BwZ8t0?si=OrhunLEx6H5e6RCq',
		'showreel'
	),
	new WorkDTO(
		1,
		'2019. Визуальные эффекты для фильма &laquo;Домовой&raquo;',
		'11.jpg',
		'https://www.youtube.com/embed/Qkifn9at3Pg?si=rHBnYhEVOBmhIhad',
		'showreel'
	),
	new WorkDTO(
		2,
		'2018. Работа над графикой к&nbsp;фильму &laquo;Не&nbsp;игра&raquo;',
		'15.jpg',
		'https://www.youtube.com/embed/44zYxnWYX7g?si=D889cMdhT672HFRf',
		'showreel'
	),
	new WorkDTO(
		3,
		'2016. Работа над графикой к&nbsp;сериалу &laquo;Танкист&raquo; и&nbsp;др. проектам',
		'16.jpg',
		'https://www.youtube.com/embed/KyU7duuTDUk?si=Aab1HPjCLlAX_lO5',
		'showreel'
	),
	new WorkDTO(
		4,
		'2022. Визуальные эффекты для фильма &laquo;Gasoline alley&raquo;',
		'1.jpg',
		'https://www.youtube.com/embed/4ZTRfKF38mw?si=DnLh5v2ZfW5r6IKD',
		'project'
	),
	new WorkDTO(
		5,
		'2021. Визуальные эффекты для фильма &laquo;APEX&raquo;',
		'2.jpg',
		'https://www.youtube.com/embed/CT_bKc7YIXs?si=CXFUeiJ_tu6JuCI1',
		'project'
	),
	new WorkDTO(
		6,
		'2021. Визуальные эффекты для фильма &laquo;Dark Web: Cicada 3301&raquo;',
		'3.jpg',
		'https://www.youtube.com/embed/tgiHwLOUb48?si=5KxwHrJKfAgniPgV',
		'project'
	),
	new WorkDTO(
		7,
		'2021. Визуальные эффекты для фильма &laquo;Deadlock&raquo;',
		'4.jpg',
		'https://www.youtube.com/embed/FMsyKFA9278?si=imJp2Q-ejEdKEJAI',
		'project'
	),
	new WorkDTO(
		8,
		'2021. Визуальные эффекты для сериала &laquo;The lost symbol&raquo;',
		'13.jpg',
		'https://www.youtube.com/embed/Kyds9AbP-DY?si=vzEd9gYrZ2UIU66y',
		'project'
	),
	new WorkDTO(
		9,
		'2019. Визуальные эффекты для &laquo;You vs. Wild&raquo;',
		'14.jpg',
		'https://www.youtube.com/embed/GLigfwaSC0E?si=K78C2_a4kz3eGfSQ',
		'project'
	),
	new WorkDTO(
		10,
		'2020. Визуальные эффекты для фильма &laquo;Debt collectors&raquo;',
		'9.jpg',
		'https://www.youtube.com/embed/9Jz8a6NL76I?si=BVrEOioVhjo5ssvK',
		'project'
	),
	new WorkDTO(
		11,
		'2019. Визуальные эффекты для фильма &laquo;The Turkey Bowl&raquo;',
		'12.jpg',
		'https://www.youtube.com/embed/fgiuYwYHp9E?si=5MlbmEeso6Kry7k8',
		'project'
	),
	new WorkDTO(
		12,
		'2021. Визуальные эффекты для фильма &laquo;American siege&raquo;',
		'5.jpg',
		'https://www.youtube.com/embed/LE4NAMNzTck?si=428goowxKnAk16AV',
		'project'
	),
	new WorkDTO(
		13,
		'2020. Визуальные эффекты для фильма &laquo;Seized&raquo;',
		'6.jpg',
		'https://www.youtube.com/embed/b4oGOR7YV-4?si=1_t53cbuq5904Qrq',
		'project'
	),
	new WorkDTO(
		14,
		'2020. Визуальные эффекты для фильма &laquo;Star light&raquo;',
		'7.jpg',
		'https://www.youtube.com/embed/wi6B-6XiIpA?si=-YLF3E1C26271m7L',
		'project'
	),
	new WorkDTO(
		15,
		'2019. Визуальные эффекты для фильма &laquo;Avengement&raquo;',
		'8.jpg',
		'https://www.youtube.com/embed/OCdqnx3S7bY?si=nR9SsykVyK5xSbhT',
		'project'
	),
];
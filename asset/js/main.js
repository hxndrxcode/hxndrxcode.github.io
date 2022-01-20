const vueApp = new Vue({
    el: '#root',
    data() {
        return {
            about: 'Hello there!\n\n' +
                'My name is Hendro. I live in Indonesia. I have been a software engineer since 2018. My most used programming language is **Node.js**.\n' +
                'But currently, I\'m in love with **Go**.\n\n' +
                'Currently I\'m looking for new job opportunity. Interested in full time remote working.\n' +
                'But I accept freelance and part time job as well.\n',
            techs: [
                {
                    group: 'Language',
                    items: ['Go', 'NodeJS', 'PHP']
                },
                {
                    group: 'Tech',
                    items: [
                        'Redis',
                        'RabbitMQ',
                        'gRPC',
                        'ElasticSearch',
                        'Websocket',
                        'WebRTC',
                        'Firebase',
                        'Push_Notif',
                        'FTP'
                    ]
                },
                {
                    group: 'Database',
                    items: ['MySQL', 'MongoDB', 'PostgreSQL']
                },
                {
                    group: 'Backend Framework',
                    items: [
                        'Laravel',
                        'AdonisJS',
                        'ExpressJS',
                        'NestJS',
                        'Echo',
                        'Beego',
                        'Gin'
                    ]
                },
                {
                    group: 'Frontend Framework/Library',
                    items: ['ReactJS', 'Vue', 'Angular', 'NuxtJS', 'NextJS', 'Ionic', 'jQUery']
                },
                {
                    group: 'Devops',
                    items: ['Docker', 'Nginx']
                }
            ],
            projects: [
                {
                    name: 'VosyNet',
                    status: 'Published',
                    description: 'Marketplace Product Digital.\n\n' +
                        '- Integrated with Indonesia\'s Payment Gateway.\n' +
                        '- Chat Buyer and Seller\n' +
                        '- Push Notification\n',
                    techs: ['NodeJS', 'AdonisJS', 'Redis', 'Push_Notif'],
                    repo: null,
                    website: [
                        {
                            url: 'https://vosy.net',
                            title: 'VosyNet'
                        }
                    ]
                },
                {
                    name: 'Burung-Chat',
                    status: 'Development',
                    description: 'Messenger Chat App.\n\n' +
                        '- Written in Go language.\n' +
                        '- Build with Websocket and Redis Pubsub.\n' +
                        '- Docker compose ready \n',
                    techs: ['Go', 'Gin', 'Redis', 'Websocket', 'MongoDB'],
                    repo: {
                        url: 'https://github.com/hxndrxcode/burung-chat',
                        title: 'Github'
                    },
                    website: []
                },
                {
                    name: 'Mern Blog',
                    status: 'Development',
                    description: 'Blogging Platforn with Social Media approach.\n\n' +
                        '- Build with MERN stack.\n',
                    techs: ['NodeJS', 'MongoDB', 'ExpressJS', 'ReactJS'],
                    repo: {
                        url: 'https://github.com/hxndrxcode/mern-blog',
                        title: 'Github'
                    },
                    website: []
                },
                {
                    name: 'KudaFTP',
                    status: 'Development',
                    description: 'FTP Client for basic needs\n\n' +
                        '- Build with Go as the Backend.\n' +
                        '- UI with React App.\n',
                    techs: ['Go', 'FTP', 'ReactJS'],
                    repo: {
                        url: 'https://github.com/hxndrxcode/kuda-ftp',
                        title: 'Github'
                    },
                    website: []
                },
                {
                    name: 'AyamRTC',
                    status: 'Development',
                    description: 'Webcam Video Call.\n\n' +
                        '- Build with WebRTC.\n' +
                        '- Realtime database Firestore \n',
                    techs: ['NodeJS', 'AdonisJS', 'Redis', 'Push_Notif'],
                    repo: {
                        url: 'https://github.com/hxndrxcode/ayam-rtc',
                        title: 'Github'
                    },
                    website: []
                },
            ],
            works: [
                {
                    company: 'PT GUE',
                    period: '2019-Present',
                    description: 'Marketplace Drug and Health Equipment + Agregator for Health Tech Company.\n\n' +
                        '- Indonesia\'s Largest Online Pharmacy\n',
                    techs: [
                        'NodeJS',
                        'Go',
                        'AdonisJS',
                        'Echo',
                        'Redis',
                        'MySQL',
                        'ElasticSearch',
                        'RabbitMQ',
                        'Websocket',
                        'Kafka',
                    ],
                    website: [
                        {
                            url: 'https://www.google.com/search?q=goapotik.com',
                            title: 'Goapotik.com'
                        }
                    ]
                },
                {
                    company: 'PT Barantum',
                    period: '2018-2019',
                    description: 'CRM and Call Center Solution\n\n' +
                        '- Popular CRM platform in Indonesia\n',
                    techs: ['PHP', 'Laravel', 'Angular', 'Ionic'],
                    website: [
                        {
                            url: 'https://www.google.com/search?q=barantum.com',
                            title: 'Barantum.com'
                        }
                    ]
                },
            ],
            freelances: [
                {
                    client: 'Ainosi',
                    period: '2020',
                    description: 'Customer Retention Platform (Loyalty and rewarding system)\n',
                    techs: [
                        'Go',
                        'NodeJS',
                        'Echo',
                        'AdonisJS',
                        'RabbitMQ',
                        'gRPC'
                    ],
                },
                {
                    client: 'Sivera',
                    period: '2019 & 2021',
                    description: 'Budget verification system (Ministry of Economic)\n',
                    techs: [
                        'PHP',
                        'Laravel',
                        'Vue'
                    ],
                },
                {
                    client: 'Emenpada',
                    period: '2019',
                    description: 'Regional Tax Management (Minitry of Tax South Jakarta)\n',
                    techs: [
                        'PHP',
                        'Laravel',
                        'Vue'
                    ],
                },
                {
                    client: 'Bentuk16',
                    period: '2021',
                    description: 'Inventory Management\n',
                    techs: [
                        'NodeJS',
                        'AdonisJS',
                        'Vue',
                    ],
                },
                {
                    client: 'Tripsista',
                    period: '2018',
                    description: 'Tour and traveling website\n',
                    techs: [
                        'PHP',
                        'Laravel',
                        'Vue'
                    ],
                },
            ],
            contacts: [
                {
                    type: 'Email',
                    title: 'hxndrxcode [at] gmail [dot] com'
                }
            ]
        }
    },
    methods: {
        markdown(value) {
            return marked.parse(value)
        }
    }
})
import { REMOVE_ITEM, ADD_ITEM, AUTHENTICATE_SUCCES, FETCH_SUCCES } from 'actions';

const initialState = {
    // notes: [
    //     {
    //         id: 1,
    //         title: 'Wake me up when Vue ends',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         created: '1 day'
    //     },
    //     {
    //         id: 2,
    //         title: 'Como es An Gular?',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         created: '1 day'
    //     },
    //     {
    //         id: 3,
    //         title: 'Du bist Reactish',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         created: '5 days'
    //     },
    //     {
    //         id: 4,
    //         title: 'Reactuj się kto moze!',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         created: '10 days'
    //     }
    // ],
    // twitters: [
    //     {
    //         id: 1,
    //         title: 'Hello Roman',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         created: '1 day',
    //         twitterName: 'hello_roman'
    //     },
    //     {
    //         id: 2,
    //         title: 'Redux guy',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         created: '1 day',
    //         twitterName: 'dan_abramov'
    //     },
    //     {
    //         id: 3,
    //         title: 'React router stuff',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         created: '5 days',
    //         twitterName: 'mjackson'
    //     },
    //     {
    //         id: 4,
    //         title: 'Super animacje!',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         created: '10 days',
    //         twitterName: 'sarah_edo'
    //     }
    // ],
    // articles: [
    //     {
    //         id: 1,
    //         title: 'React on my mind',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         articleUrl: 'https://youtube.com/helloroman',
    //         created: '1 day'
    //     },
    //     {
    //         id: 2,
    //         title: 'Wish you React',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         articleUrl: 'https://youtube.com/helloroman',
    //         created: '1 day'
    //     },
    //     {
    //         id: 3,
    //         title: 'You gave React a bad name',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         articleUrl: 'https://youtube.com/helloroman',
    //         created: '5 days'
    //     },
    //     {
    //         id: 4,
    //         title: 'Is it React you looking for?',
    //         content:
    //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    //         articleUrl: 'https://youtube.com/helloroman',
    //         created: '10 days'
    //     }
    // ]
    userID: '60242c4d60d0a74ece1df35e' //to też jest tymczasowe, stworzone tylko po to żeby nie musieć się logować przy każdym odświeżaniu
    // wszystko w tym Initial state ma być ostatecznie wyrzucone, ma zostać pusty obiekt
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REMOVE_ITEM:
            return {
                ...state,
                [payload.itemType]: state[payload.itemType].filter((item) => item.id !== payload.id)
            };
        case ADD_ITEM:
            return {
                ...state,
                [payload.itemType]: [...state[payload.itemType], payload.item]
            };
        case AUTHENTICATE_SUCCES:
            return {
                ...state,
                userID: payload.data._id
            };
        case FETCH_SUCCES:
            return {
                ...state,
                [payload.itemType]: [...payload.data]
            };

        default:
            return state;
    }
};

export default rootReducer;

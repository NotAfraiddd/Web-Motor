import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'dataList',
    initialState: [
        {
            id: '1',
            name: 'Superbike BMW S1000RR Superbike BMW S1000RR Superbike BMW S1000RR',
            price: '$2000',
            avatar: 'https://autopro8.mediacdn.vn/2020/8/19/bmw-s1000rr-2-1597795333957285219652.jpg',
        },
        {
            id: '2',
            name: 'Superbike R1',
            price: '$2500',
            avatar: 'https://www.revzoneyamaha-motor.com.vn/wp-content/uploads/2022/03/proevekoert-2020-yamaha-yzf-r1-amp-yzf-r1m-paa-jerez-img-2400_10436_66_1569488117-1.jpeg',
        },
        {
            id: '3',
            name: 'Ducati Panigale V2 Troy Bayliss',
            price: '$5000',
            avatar: 'https://ducativietnam.com/upload/files/MENU/Panigale/v4s.jpg',
        },
        {
            id: '4',
            name: 'Panigale V2',
            price: '$1900',
            avatar: 'https://cms-i.autodaily.vn/du-lieu/2022/03/12/Ducati%20Panigale%20V2%20Star%20Silk%20White%20(6).jpg',
        },
    ],
    // reducers: {
    //     displayData: (state, action) => {
    //         state.na
    //     },
    // },
});

export default dataSlice;

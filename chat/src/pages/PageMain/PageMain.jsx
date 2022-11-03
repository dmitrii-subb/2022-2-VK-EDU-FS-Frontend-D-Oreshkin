import React from 'react'
import { useState, useEffect } from 'react'

import MainHeader from '../../components/MainHeader/MainHeader.jsx'
import MainBody from '../../components/MainBody/MainBody.jsx'
import FloatButton from '../../components/FloatButton/FloatButton.jsx'

function PageMain() {
    return (
        <>
            <MainHeader />
            <MainBody />
            <FloatButton />
        </>
    );
}

export default PageMain;

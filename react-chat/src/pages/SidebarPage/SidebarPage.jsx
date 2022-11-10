import React from 'react'

import { SidebarHeader } from '../../components/SidebarHeader'
import { SidebarBody } from '../../components/SidebarBody'
// import FloatButton from '../../components/FloatButton'

function SidebarPage({openChat}) {

    return (
        <>
            <SidebarHeader />
            <SidebarBody openChat={openChat} />
            {/* <FloatButton /> */}
        </>
    );
}

export { SidebarPage };

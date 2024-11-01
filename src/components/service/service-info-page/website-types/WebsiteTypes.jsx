import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";

import Container from '../../../common/container/Container';
import WebsiteInfo from './website-info/WebsiteInfo';


const WebsiteTypes = ({websiteTypes, websiteInfo}) => {

  const [activeSiteType, setActiveSiteType] = useState(4)
    // const { websiteTypes, status, error } = useSelector((state) => state.service);

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     if (status.websiteTypes === 'idle') {
    //       dispatch(fetchWebsiteTypes());
    //     }
    //   }, [status.websiteTypes, dispatch]);
    
    //   if (status.websiteTypes === 'loading') {
    //     return <Loading/>;
    //   }
    
    //   if (status.websiteTypes === 'failed') {
    //     return <div>Error: {error}</div>;
    //   }
    

  return (
    <>
    <div className='website-types'>
        <Container>
        <h1>Կայքի տեսակները</h1>
        <div className="website-types-items">
            {websiteTypes? (
                websiteTypes.map(({id, name_hy, name_en, name_ru}) => {
                    return (
                        <div className='website-types-item' key={id} style={{backgroundColor: id===activeSiteType?"#00A21A":"inherit"}} onClick={() => {
                            setActiveSiteType(id)
                        }}>
                            <FaCheck style={{color: id===activeSiteType?"#007C05":"#B1B2B1"}}/>
                            <p>{name_hy}</p>
                        </div>    
                    )})
            ) : (
                <div>no availible</div>
            )}
        </div>
        </Container>
    </div>
    <WebsiteInfo activeSiteType={activeSiteType} websiteInfo={websiteInfo}/>
    </>

  )
}

export default WebsiteTypes
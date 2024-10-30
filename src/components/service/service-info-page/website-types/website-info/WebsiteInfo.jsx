import React, { useEffect } from 'react'
import Container from '../../../../common/container/Container'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWebsiteInfo } from '../../../../../redux/slices/ServiceSlice';

const WebsiteInfo = ({activeSiteType}) => {

    const {status, error, websiteInfo} = useSelector((state) => state.service)
    const dispatch = useDispatch()

    useEffect(() => {
        if(status === "idle") {
            dispatch(fetchWebsiteInfo())
        }
    }, [status, dispatch])
    if(status === 'pending'){
        return <div>loading...</div>
    }
    if (status === 'failed') {
        return <div>error: {error} </div>
    }

  return (
    <div className='website-info'>
        <Container>
            {status==="succeeded" && websiteInfo ?(

                websiteInfo.map(({id, name_hy, text_hy, img1, site_type}) => {
                    if(activeSiteType === site_type){
                        return (
                            <div key={id}>
                                <h1>{name_hy}</h1>
                                <div className='float'>
                                    
                                    <img src={img1} alt="site" />
                                </div>
                                <p>{text_hy}</p>
                            </div>
                        )
                    } else {
                        return ""
                    }
                })
            ) : (
                <div>not availble details</div>
            )}
        </Container>
    </div>
  )
}

export default WebsiteInfo
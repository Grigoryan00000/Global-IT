import React from 'react'
import Container from '../../../../common/container/Container'

const WebsiteInfo = ({activeSiteType, websiteInfo}) => {

  return (
    <div className='website-info'>
        <Container>
            { websiteInfo ?(

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
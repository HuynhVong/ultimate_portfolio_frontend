import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://www.linkedin.com/in/huynhvong1880'>
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href='https://www.facebook.com/profile.php?id=100013434578076'>
                    <FaFacebook />
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/pluviophile_elysian/'>
                    <BsInstagram />
                </a>
            </div>
            <div className='app__social-dlCv'>
                <a href='https://rg.link/fMPqwl4'>
                    <FaCloudDownloadAlt />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia
import React, { useEffect, useState } from 'react';
import './PlayFilm.scss'
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ContentFilm from '../ContentFilm';

const PlayFilm = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [content, setContent] = useState('');
    useEffect(() => {
        getFilm();
    })

    const getFilm = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/filmcate?maphim=${id}`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
            setContent(data[0].mota);
        }
    }

    return (
        <>
            <div className='containerPlayFilm'>
                <div className='contentPlayFilm'>
                    {data && data.map((item, id) => {
                        return (
                            <>
                                <Player
                                    playsInline
                                    poster={item.poster}
                                    src={item.video}
                                    aspectRatio='16:9'
                                />
                            </>
                        );
                    })}
                </div>
            </div>
            <ContentFilm content={content} />
        </>
    );
}

export default PlayFilm;
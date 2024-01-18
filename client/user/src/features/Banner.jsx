import Carousel from 'react-material-ui-carousel'

export default function Banner(){
    var items = [
        {
            description: "banner 1",
            image: "https://file.hstatic.net/1000075078/file/desktop_3d6bad3421a94d04a1149a72743a36bf.jpg",
            link: "#"
        },
        {
            description: "banner 2",
            image: "https://file.hstatic.net/1000075078/file/web_moi_-_desktop_b5a00ce640cf431b90b75feee7ab480d.jpg",
            link: "#"
        },
        {
            description: "banner 3",
            image: "https://file.hstatic.net/1000075078/file/web_desktop_ba549ef70830409cbc694c643f263e9e.jpg",
            link: "#"
        },

        
    ]

    return(
        <Carousel className=' w-100'>
            {
                items.map( (item, i) => <a  key={i} href={item.link}><img src={item.image} alt={item.description} className='h-full'/></a>   )
            }
        </Carousel>
    )
}
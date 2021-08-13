import Thumbnails from "./Thumbnails"

function Results({results}) {

    const dummyResults = [
        {
            overview: "developing user interfaces,testing and debugging. Proven abilities in ptimizing web functionalities thst improve data retrieval",
            title: "React Js",  
            imgSrc: "/pexels6.jpg",
            data: "1996-10-28",
            vote_counts: 2345
        },
        {
            overview: "developing user interfaces,testing and debugging. Proven abilities in ptimizing web functionalities thst improve data retrieval",
            title: "Agular Js",  
            imgSrc: "/pexels2.jpg",
            data: "1996-10-28",
            vote_counts: 2345
        },
        
        {
            overview: "developing user interfaces,testing and debugging. Proven abilities in ptimizing web functionalities thst improve data retrieval",
            title: "React Native",  
            imgSrc: "/pexels3.jpg",
            data: "1996-10-28",
            vote_counts: 2345
        },       
        
        {
            overview: "developing user interfaces,testing and debugging. Proven abilities in ptimizing web functionalities thst improve data retrieval",
            title: "Node Js",  
            imgSrc: "/pexels4.jpg",
            data: "1996-10-28",
            vote_counts: 2345
        }, 
        
        {
            overview: "developing user interfaces,testing and debugging. Proven abilities in ptimizing web functionalities thst improve data retrieval",
            title: "Graph QL",  
            imgSrc: "/pexels5.jpg",
            data: "1996-10-28",
            vote_counts: 2345
        },  
    
        {
            overview: "developing user interfaces,testing and debugging. Proven abilities in ptimizing web functionalities thst improve data retrieval",
            title: "Graph QL",  
            imgSrc: "/pexels10.jpg",
            data: "1996-10-28",
            vote_counts: 2345
        },
    
        {
            overview: "developing user interfaces,testing and debugging. Proven abilities in ptimizing web functionalities thst improve data retrieval",
            title: "Graph QL",  
            imgSrc: "/pexels7.jpg",
            data: "1996-10-28",
            vote_counts: 2345
        },
    
        {
            overview: "developing user interfaces,testing and debugging. Proven abilities in ptimizing web functionalities thst improve data retrieval",
            title: "Graph QL",  
            imgSrc: "/pexels8.jpg",
            data: "1996-10-28",
            vote_counts: 2345
        },
    
        {
            overview: "developing user interfaces,testing and debugging. Proven abilities in ptimizing web functionalities thst improve data retrieval",
            title: "Graph QL",  
            imgSrc: "/pexels9.jpg",
            data: "1996-10-28",
            vote_counts: 2345
        },
    
        {
            overview: "developing user interfaces,testing and debugging. Proven abilities in ptimizing web functionalities thst improve data retrieval",
            title: "Graph QL",  
            imgSrc: "/pexels10.jpg",
            data: "1996-10-28",
            vote_counts: 2345
        },]
    return (
        <div className="sm:grid md:grid-cols-2 xl:grid-cols-3 px-5 my-10 3xl:flex flex-wrap justify-center">
            {dummyResults.map(result => (
                <Thumbnails key={result.id} result={result} />
            ))}

     
        </div>
    )
}

export default Results

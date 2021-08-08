export default function Footer(props){
    return(
      <footer className="items-center p-4 mt-4 text-center bg-green-500">
      <h2 className='text-center'> {props.report.length} Locations World Wide </h2>
    </footer>
    ) 
  }
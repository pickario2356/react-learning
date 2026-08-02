import Card from './components/Card'

const App = () => {
  const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-aa4QAmLM93FQ0PPNQ0kNuxwSr3C84c8GTgI6LotBg&s=10",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcfCtqh-F0H7heG5E6sguLY0SGPmRAVAjjnHk3GPO1g&s=10",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAytnCwPOnrZZFYGwsTYsYVM0P50tRmoKHF4pcftEztQ&s=10",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0lP2_kgCkHUWXDSmcPvGTYhE2XLv3amPV-aPYMxhrQ&s=10",
    company: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "London, UK",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2tL_LqE0tXh0tBYRxY0_FnYVAJXw_0ArGg3BGHAByw&s=10",
    company: "Apple",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrjNLdc96EC-wh8zkwU27CUTvRisRZ2VK5WVPpCtbvA&s=10",
    company: "Netflix",
    datePosted: "6 days ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhxIOBdwbEGXJ4d1Vp-TNJu_0_s7ur-TqW553Idjlxw&s=10",
    company: "Adobe",
    datePosted: "2 weeks ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_D4nFNOnLAogu3zdDdJbOT1tcU6AdxojJ6eulZ44gQ&s=10",
    company: "Uber",
    datePosted: "1 day ago",
    post: "Frontend Intern",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$20/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoK7gW4_tjcow7_Pj_mo74Rz5lWMBr-jDqwdsyaaSfQ&s=10",
    company: "Airbnb",
    datePosted: "8 days ago",
    post: "Frontend Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZ3hNbBrr63a2WsrDQL-ryFaCBM3uhe3X2SV38pp2Bw&s=10",
    company: "Spotify",
    datePosted: "10 days ago",
    post: "React UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Stockholm, Sweden",
  },
];
  return (
    <div className='parent'>
      {jobs.map((elem,idx)=>{
        return <div key={idx}><Card post={elem.post} company={elem.company}
        datePosted={elem.datePosted} pay={elem.pay} location={elem.location}
        tag1={elem.tag1}tag2={elem.tag2} logo={elem.brandLogo}/></div>
      })}
    </div>
  )
}

export default App  
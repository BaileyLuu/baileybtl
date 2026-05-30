const experiences = [
  {
    year: '2025 - Present',
    company: 'AI-Web Application Developer at SRS Consulting Engineers Inc.',
    location: 'Vaughan, Canada',
    period: 'September 2025 - Present',
    description: `Building PositiBAI that implements Positive Building Framework`,
    url: 'https://srscanada.com/'
  },
  {
    year: '2023 - 2025',
    company: 'Research Assistant at York University',
    location: 'Toronto, Canada',
    period: 'June 2023 - October 2025',
    description: `Designed and developed a Social Media Identity Resolution application using Tkinter to support Anti-Money Laundering (AML) and Know Your Customer (KYC) investigations. Integrated multiple social media APIs, including Instagram, Facebook, and TikTok, alongside facial recognition technologies to help identify and correlate online identities across platforms.`,
    url: 'https://www.yorku.ca'
  },
  {
    year: '2023 - 2024',
    company: 'Organizer at KubeHuddle Canada',
    location: 'Toronto, Canada',
    period: 'November 2023 - November 2024',
    description: `KubeHuddle is the first professional event which I was honoured to be part as an organizer (as I was an attendee in 2023).
    
    With countless hours of planning (logistics, marketing, techical) and constant ideation/communication/execution/collaboration with amazing team, we were able to bring 200+ attendees networking, speakers sharing their insights, and sponsors showcasing their products! 
    
    I worked on designing the social media posters/banners graphics using Canva, editing the promotional videos using CapCut and Instagram Reels, drafting the event schedule to coordinating with sponsors/speakers, and developing a project using Ticket Tailor API for badge creation and event stats (e.g dietary restrictions stats).

    Although it was a 6-month intensive organizing process, but I enjoyed every moment of it and learned so much from both behavioural and technical aspects.
    `,
    url: 'https://ca.kubehuddle.com'
  },
    
  {
    year: '2021 - 2023',
    company: 'Organizer/Logistics Executive at ElleHacks',
    location: 'Toronto, Canada',
    period: 'September 2021 - February 2023',
    description: `As a Logistics Executive, I was responsible for developing event schedules and definingjudging criterias, designing participants materials, and preparing operational resources for volunteers, mentors, judges, sponsors, and attendees.

    Aside from the logistics, I also worked on ElleHacks informational Discord Bot that automated attendee check-ins, role assignments, and access to event information, improving the overall participant experience and reducing manual administrative work.  
    `,
    url: 'https://ellehacks.com'
  }
];
const WorkPage = () => {
  return (
    <div className="container mx-auto px-4">
      {experiences.map((exp, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-4 my-8">
          <div className="col-span-1 sm:col-span-1">
            <p className="text-gray-500">{exp.year}</p>
          </div>
          <div className="col-span-1 sm:col-span-3">
            <a href={exp.url} target="_blank"><h3 className="font-semibold">{exp.company} <span className="text-sm">↗</span></h3></a>
            <p className="text-gray-500">{exp.location}</p>
            <p className="mt-2">{exp.period}</p>
            <p className="mt-4 whitespace-pre-line">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkPage;
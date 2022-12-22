const jobs = [
  {
    company_name: 'Diverse Lynx',
    company_url:
      'https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Texas, United States',
    job_title: 'python developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386660866?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=2RkL7kvIhp%2FBGrYtrQAtjQ%3D%3D&position=1&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/diverselynx',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386660866',
    normalized_company_name: 'Diverselynx',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'Diverse Lynx',
    company_url:
      'https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Houston, TX',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386643801?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=bvqCPLS3krizhzsQG%2FT28w%3D%3D&position=2&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/diverselynx',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386643801',
    normalized_company_name: 'Diverselynx',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'The Finders',
    company_url:
      'https://www.linkedin.com/company/tech-finders?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'United States',
    job_title: 'Remote Software Engineer - Python',
    job_url:
      'https://www.linkedin.com/jobs/view/remote-software-engineer-python-at-the-finders-3378148464?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=2oQ9EDwU5X8dM5Xxe6tZBQ%3D%3D&position=3&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/tech-finders',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/remote-software-engineer-python-at-the-finders-3378148464',
    normalized_company_name: 'Tech finders',
    posted_date: '2022-12-09',
  },
  {
    company_name: 'Wipro',
    company_url:
      'https://in.linkedin.com/company/wipro?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Menlo Park, CA',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-wipro-2774569645?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=pNIDfzsszwVapxMrzARbtg%3D%3D&position=4&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned: 'https://in.linkedin.com/company/wipro',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-wipro-2774569645',
    normalized_company_name: 'Wipro',
    posted_date: '2022-09-23',
  },
  {
    company_name: 'Horizon Health Care, Inc',
    company_url:
      'https://www.linkedin.com/company/horizon-health-care-inc-?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'United States',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-horizon-health-care-inc-3397794613?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=KmPj%2F682W%2F3GaHx5xG1%2BJg%3D%3D&position=5&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/horizon-health-care-inc-',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-horizon-health-care-inc-3397794613',
    normalized_company_name: 'Horizon health care inc ',
    posted_date: '2022-11-17',
  },
  {
    company_name: 'Acquire Me',
    company_url:
      'https://uk.linkedin.com/company/acquireme?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'New York City Metropolitan Area',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-acquire-me-3346772434?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=7iVq8WLScUXmTrmNGBDgbw%3D%3D&position=6&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned: 'https://uk.linkedin.com/company/acquireme',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-acquire-me-3346772434',
    normalized_company_name: 'Acquireme',
    posted_date: '2022-12-06',
  },
  {
    company_name: 'Diverse Lynx',
    company_url:
      'https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Princeton, NJ',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386665428?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=uIggoR53dEmSsGC47uQe%2FA%3D%3D&position=7&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/diverselynx',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386665428',
    normalized_company_name: 'Diverselynx',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'Info Way Solutions',
    company_url:
      'https://www.linkedin.com/company/infoway-solutions?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Fremont, CA',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-info-way-solutions-3394448122?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=el%2FyHC%2B3vUs%2B8EI6HUAGvw%3D%3D&position=8&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/infoway-solutions',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-info-way-solutions-3394448122',
    normalized_company_name: 'Infoway solutions',
    posted_date: '2022-12-08',
  },
  {
    company_name: 'Infosys',
    company_url:
      'https://in.linkedin.com/company/infosys?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Hillsboro, OR',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-infosys-3276600193?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=Z0hW%2FP1m1K2OFa1GXisCPA%3D%3D&position=9&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned: 'https://in.linkedin.com/company/infosys',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-infosys-3276600193',
    normalized_company_name: 'Infosys',
    posted_date: '2022-10-17',
  },
  {
    company_name: 'Diverse Lynx',
    company_url:
      'https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Huston, PA',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386585132?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=ETxfEZ4UikYU3wYHeEkMhA%3D%3D&position=10&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/diverselynx',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386585132',
    normalized_company_name: 'Diverselynx',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'Wipro',
    company_url:
      'https://in.linkedin.com/company/wipro?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Mountain View, CA',
    job_title: 'Python developer with Django and Github',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-with-django-and-github-at-wipro-3259126313?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=8yu64woPnOwK75lS1tJC1g%3D%3D&position=11&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned: 'https://in.linkedin.com/company/wipro',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-with-django-and-github-at-wipro-3259126313',
    normalized_company_name: 'Wipro',
    posted_date: '2022-10-18',
  },
  {
    company_name: 'Diverse Lynx',
    company_url:
      'https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Chicago, IL',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386545494?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=sRbWP6RT4VFepn9UqIvkcw%3D%3D&position=12&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/diverselynx',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386545494',
    normalized_company_name: 'Diverselynx',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'Diverse Lynx',
    company_url:
      'https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Irvine, CA',
    job_title: 'Junior Python developer',
    job_url:
      'https://www.linkedin.com/jobs/view/junior-python-developer-at-diverse-lynx-3386728254?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=lgAXXlU6ihj3rdO%2BfO1Ugw%3D%3D&position=13&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/diverselynx',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/junior-python-developer-at-diverse-lynx-3386728254',
    normalized_company_name: 'Diverselynx',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'South 6',
    company_url:
      'https://www.linkedin.com/company/south-6?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Brooklyn, NY',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-south-6-3356685685?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=DRVpxdXhplJuPQybvqziPQ%3D%3D&position=14&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned: 'https://www.linkedin.com/company/south-6',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-south-6-3356685685',
    normalized_company_name: 'South 6',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'Indotronix Avani Group',
    company_url:
      'https://www.linkedin.com/company/indotronix-avani-group?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Brecksville, OH',
    job_title: 'Python Developer position',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-position-at-indotronix-avani-group-3389509929?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=flrbEGjw4ERZNu6%2Fq6cDbg%3D%3D&position=15&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/indotronix-avani-group',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-position-at-indotronix-avani-group-3389509929',
    normalized_company_name: 'Indotronix avani group',
    posted_date: '2022-12-08',
  },
  {
    company_name: 'Searchability',
    company_url:
      'https://uk.linkedin.com/company/searchability?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Atlanta, GA',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-searchability-3393122007?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=JfwDf79Z8pNRoyqUEubV7Q%3D%3D&position=16&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://uk.linkedin.com/company/searchability',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-searchability-3393122007',
    normalized_company_name: 'Searchability',
    posted_date: '2022-12-08',
  },
  {
    company_name: 'Diverse Lynx',
    company_url:
      'https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Jersey City, NJ',
    job_title: 'Jr. Python Developer@AZ/CA/NJ',
    job_url:
      'https://www.linkedin.com/jobs/view/jr-python-developer%40az-ca-nj-at-diverse-lynx-3386632518?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=3M6HApGA6X%2FamJ6eLRndgw%3D%3D&position=17&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/diverselynx',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/jr-python-developer%40az-ca-nj-at-diverse-lynx-3386632518',
    normalized_company_name: 'Diverselynx',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'Horizon Health Care, Inc',
    company_url:
      'https://www.linkedin.com/company/horizon-health-care-inc-?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Chicago, IL',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-horizon-health-care-inc-3379434281?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=rczX0xxjGQk1UbZyT%2BW2Uw%3D%3D&position=18&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/horizon-health-care-inc-',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-horizon-health-care-inc-3379434281',
    normalized_company_name: 'Horizon health care inc ',
    posted_date: '2022-11-04',
  },
  {
    company_name: 'hackajob',
    company_url:
      'https://uk.linkedin.com/company/hackajob?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'New York, United States',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-hackajob-3397780343?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=FiEFRt%2B1%2F4%2F4aTb6nr3VMw%3D%3D&position=19&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned: 'https://uk.linkedin.com/company/hackajob',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-hackajob-3397780343',
    normalized_company_name: 'Hackajob',
    posted_date: '2022-12-12',
  },
  {
    company_name: 'Diverse Lynx',
    company_url:
      'https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Mesquite, TX',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386708234?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=ylF4JrJbsZrARCPmu7JWYg%3D%3D&position=20&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/diverselynx',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386708234',
    normalized_company_name: 'Diverselynx',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'Diverse Lynx',
    company_url:
      'https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'San Francisco, CA',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386559833?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=gq6FLkKlweMx6tao053gGA%3D%3D&position=21&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/diverselynx',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386559833',
    normalized_company_name: 'Diverselynx',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'Liberty Personnel Services, Inc.',
    company_url:
      'https://www.linkedin.com/company/liberty-personnel-services-inc?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'Somerville, NJ',
    job_title: 'Entry Level/Junior Python Software Engineer',
    job_url:
      'https://www.linkedin.com/jobs/view/entry-level-junior-python-software-engineer-at-liberty-personnel-services-inc-3190881683?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=MRWeiIT3vdfp%2FVI5IAePRw%3D%3D&position=22&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/liberty-personnel-services-inc',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/entry-level-junior-python-software-engineer-at-liberty-personnel-services-inc-3190881683',
    normalized_company_name: 'Liberty personnel services inc',
    posted_date: '2022-11-22',
  },
  {
    company_name: 'TMS',
    company_url:
      'https://www.linkedin.com/company/tmsllc?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'United States',
    job_title: 'Python Developer - Remote Opportunity - 12+ Months',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-remote-opportunity-12%2B-months-at-tms-3390002337?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=rKlA2aSzSu1LC0Rt8LWHBg%3D%3D&position=23&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned: 'https://www.linkedin.com/company/tmsllc',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-remote-opportunity-12%2B-months-at-tms-3390002337',
    normalized_company_name: 'Tmsllc',
    posted_date: '2022-11-29',
  },
  {
    company_name: 'Diverse Lynx',
    company_url:
      'https://www.linkedin.com/company/diverselynx?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'San Francisco, CA',
    job_title: 'Python Developer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386561404?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=YHjR%2BSjCdCOEax56VFOjNQ%3D%3D&position=24&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://www.linkedin.com/company/diverselynx',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-developer-at-diverse-lynx-3386561404',
    normalized_company_name: 'Diverselynx',
    posted_date: '2022-11-16',
  },
  {
    company_name: 'Certus Recruitment Group',
    company_url:
      'https://uk.linkedin.com/company/certusrecruitmentgroup?trk=public_jobs_jserp-result_job-search-card-subtitle',
    job_location: 'New York, NY',
    job_title: 'Python Engineer',
    job_url:
      'https://www.linkedin.com/jobs/view/python-engineer-at-certus-recruitment-group-3364443734?refId=xh47NIqkocWG%2BRxjr37DzA%3D%3D&trackingId=1jp%2F02HE%2FR3r7LyA%2BDj%2Bfw%3D%3D&position=25&pageNum=0&trk=public_jobs_jserp-result_search-card',
    linkedin_company_url_cleaned:
      'https://uk.linkedin.com/company/certusrecruitmentgroup',
    linkedin_job_url_cleaned:
      'https://www.linkedin.com/jobs/view/python-engineer-at-certus-recruitment-group-3364443734',
    normalized_company_name: 'Certusrecruitmentgroup',
    posted_date: '2022-11-22',
  },
];

import Education from "./Education";

export type exp = {
  expHeader: string;
  expSubheader: string;
  expTimeInterval: string;
};

const EduExp = () => {
  const eduExp: exp[] = [
    {
      expHeader: "St. Xavier's College",
      expSubheader: "Bsc. CSIT",
      expTimeInterval: "2021-2026",
    },
    {
      expHeader: "CCRC",
      expSubheader: "+2 on Physics",
      expTimeInterval: "2018-2020",
    },
  ];
  const profExp: exp[] = [
    {
      expHeader: "Frontend Intern",
      expSubheader: "Crispr Coders",
      expTimeInterval: "2023-2024",
    },
    {
      expHeader: "Computer Club Jr Organizer",
      expSubheader: "CCRC",
      expTimeInterval: "2018-2020",
    },
  ];
  return (
    <section className="flex lg:flex-row flex-col gap-[72px] lg:mt-32 mt-16 container mx-auto text-white p-2 lg:p-0">
      <Education heading="Education" exp={eduExp} />
      <Education heading="Professional Experience" exp={profExp} />
    </section>
  );
};

export default EduExp;

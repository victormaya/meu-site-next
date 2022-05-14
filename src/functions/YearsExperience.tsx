export default function YearsExperience() {
  const yearBirth = new Date(2020, 0, 1).getTime();
  const currentDate = Date.now();
  return ~~((currentDate - yearBirth) / 31557600000);
}

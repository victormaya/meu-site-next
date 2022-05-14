export default function myAge() {
  const yearBirth = new Date(1997, 1, 22).getTime();
  const currentDate = Date.now();
  return ~~((currentDate - yearBirth) / 31557600000);
}

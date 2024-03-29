/** Format nama user menjadi "John - john@example.com - Unemployed",
 *  dan akses data user dengan teknik destrucuring assignment
 *  gunakan default value ketika atribut tidak ditemukan
 */

const format = (user) => {
  // TODO: answer here
  return `${user.name} - ${user.email} - ${user.job || "Unemployed"}`;
  

};

console.log(format({ name: "John", email: "john@example.com" }));

module.exports = format
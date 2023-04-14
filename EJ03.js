
class Alumno {
    constructor(username, DNI) {
      this.username = username;
      this.DNI = DNI;
    }
    mostrar() {
        return `Username: ${this.username}, DNI: ${this.DNI}`;
      }
}
export default Alumno;

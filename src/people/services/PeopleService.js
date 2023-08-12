import { config } from "../../config";

class PeopleService {
  baseUrl = config.baseUrl;
  endpoint = "people";

  completeUrl = `${this.baseUrl}/${this.endpoint}`;

  async getAllPeople() {
    const response = await fetch(this.completeUrl);
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data.resutls; // Il faut aller chercher une propriété
  }

  async getPeopleById(id) {
    const response = await fetch(`${this.completeUrl}/${id}`);
    if (!response.ok) throw new Error();

    return await response.json(); // Cette url retourne directement un object
  }
}

export default PeopleService;

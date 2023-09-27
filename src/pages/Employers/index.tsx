import { Header } from "../../components/Header";
import { ContractHighlight, EmployersContainer, EmployersTable } from "./styles";

export function Employers() {
  return (
    <h1>
      <Header/>
      <EmployersContainer>
        <EmployersTable>
          <tbody>
            <tr>
              <td width="50%">John Smith</td>
              <td>
                <ContractHighlight variant="permanent">
                  Permanent
                </ContractHighlight>
              </td>
              <td>johnsmith@email.com</td>
              <td>
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
            <tr>
              <td width="50%">Matheus Smith</td>
              <td>
                <ContractHighlight variant="contract">
                  Contract
                </ContractHighlight>
              </td>
              <td>matheussmith@email.com</td>
              <td>
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        </EmployersTable>
      </EmployersContainer>
    </h1>
  )
}
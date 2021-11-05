export const DataTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22/04/2021</td>
            <td>Barry Allen</td>
            <td>34</td>
            <td>25</td>
            <td>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(15017)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

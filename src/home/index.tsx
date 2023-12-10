import { useEffect, useState } from "react";
import NavBar from "../NavBar/navbar";
import { get } from "../helpers/apiHelper";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, TablePagination } from "@mui/material";
import { useNavigate } from 'react-router-dom';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  bloodGroup: string;
  location: string;
  department: string;
  joiningDate: string;
  salaryRevisionDate: string;
}


function Home() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    fetchData();
    checkToken()
  }, [page, rowsPerPage]);


  const checkToken = async () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate("/home")
    }
  };

  const fetchData = async () => {
    try {
      const data = await get(`/Employee?pageNum=${page + 1}&pageSize=${rowsPerPage}`);
      setEmployees(data?.result)
      setTotalCount(data?.result?.length); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
  

  const hasNextPage = () => {
    return employees.length === rowsPerPage && (page + 1) * rowsPerPage < totalCount;
  };

  const addEmployee = () => {
    navigate("/add")
  }
  
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log(employees.length)
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px' }}>
        <h2>List of Employees</h2>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={addEmployee}
        >
          Add User
        </Button>
      </div>
      <TableContainer component={Paper} >
        <Table aria-label="Employees table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Blood Group</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Joining Date</TableCell>
              <TableCell>Salary Revision Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.mobileNumber}</TableCell>
                <TableCell>{employee.bloodGroup}</TableCell>
                <TableCell>{employee.location}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.joiningDate}</TableCell>
                <TableCell>{employee.salaryRevisionDate}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit">
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <Delete />
                  </IconButton>
                  <IconButton aria-label="view">
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{
          disabled: !hasNextPage()
        }}
      />
    </div>
  )
}

export default Home;    


import React, { useEffect, useState } from 'react';
import { getContacts, deleteContact } from '../services/contactService';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination, TableSortLabel, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ContactList.css';


const ContactList = ({ onEdit }) => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await getContacts();
      setContacts(response.data);
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    await deleteContact(id);
    setContacts(contacts.filter(contact => contact._id !== id));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contacts.filter(contact => 
    contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedContacts = filteredContacts.sort((a, b) => {
    if (orderBy === 'firstName') {
      return (order === 'asc' ? a.firstName.localeCompare(b.firstName) : b.firstName.localeCompare(a.firstName));
    }
    if (orderBy === 'lastName') {
      return (order === 'asc' ? a.lastName.localeCompare(b.lastName) : b.lastName.localeCompare(a.lastName));
    }
    if (orderBy === 'email') {
      return (order === 'asc' ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email));
    }
    if (orderBy === 'phone') {
      return (order === 'asc' ? a.phone.localeCompare(b.phone) : b.phone.localeCompare(a.phone));
    }
    if (orderBy === 'company') {
      return (order === 'asc' ? a.company.localeCompare(b.company) : b.company.localeCompare(a.company));
    }
    if (orderBy === 'jobTitle') {
      return (order === 'asc' ? a.jobTitle.localeCompare(b.jobTitle) : b.jobTitle.localeCompare(a.jobTitle));
    }
    return 0;
  });

  const paginatedContacts = sortedContacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom>
        Contact List
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearch}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'firstName'}
                  direction={orderBy === 'firstName' ? order : 'asc'}
                  onClick={(event) => handleRequestSort(event, 'firstName')}
                >
                  First Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'lastName'}
                  direction={orderBy === 'lastName' ? order : 'asc'}
                  onClick={(event) => handleRequestSort(event, 'lastName')}
                >
                  Last Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'email'}
                  direction={orderBy === 'email' ? order : 'asc'}
                  onClick={(event) => handleRequestSort(event, 'email')}
                >
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'phone'}
                  direction={orderBy === 'phone' ? order : 'asc'}
                  onClick={(event) => handleRequestSort(event, 'phone')}
                >
                  Phone
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'company'}
                  direction={orderBy === 'company' ? order : 'asc'}
                  onClick={(event) => handleRequestSort(event, 'company')}
                >
                  Company
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'jobTitle'}
                  direction={orderBy === 'jobTitle' ? order : 'asc'}
                  onClick={(event) => handleRequestSort(event, 'jobTitle')}
                >
                  Job Title
                </TableSortLabel>
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedContacts.map(contact => (
              <TableRow key={contact._id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.jobTitle}</TableCell>
                <TableCell>
                  <IconButton onClick={() => onEdit(contact)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(contact._id)}>
                    <DeleteIcon />
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
        count={filteredContacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default ContactList;
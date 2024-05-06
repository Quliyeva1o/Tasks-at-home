import React from 'react';
import { Button, Table } from 'antd';
import { Link, useOutletContext } from 'react-router-dom';
import {  deleteOne } from '../../../API/requests';
import { endpoints } from '../../../API/constants';
import Swal from 'sweetalert2';

const Countries = () => {
  const [countries, setCountries] = useOutletContext();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOne(endpoints.countries, id)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            setCountries(countries.filter(country => country.id !== id));
          })
          .catch((error) => {
            console.error('Error deleting country:', error);
          });
      }
    });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Azerbaijan',
          value: 'Azerbaijan',
        },
        {
          text: 'Germany',
          value: 'Germany',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: '30%',
    },
    {
      title: 'Population',
      dataIndex: 'population',
      sorter: (a, b) => a.population - b.population,
      render: (text) => <span>{text} million</span>,
    },
    {
      title: 'Capital',
      dataIndex: 'capital',
      filters: [
        {
          text: 'Berlin',
          value: 'Berlin',
        },
        {
          text: 'Baku',
          value: 'Baku',
        },
      ],
      onFilter: (value, record) => record.capital.startsWith(value),
      filterSearch: true,
      width: '40%',
    },
    {
      title: "Delete",
      dataIndex: 'id',
      render: (id) => <Button onClick={() => handleDelete(id)}>Delete</Button>,
    },
    {
      title: "Detail",
      dataIndex: 'id',
      render: (id) => <Link to={`/admin/countries/${id}`}><Button>Detail</Button></Link>
    }
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Table columns={columns} dataSource={countries} onChange={onChange} />
  );
};

export default Countries;

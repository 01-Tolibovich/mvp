import React, { useState } from "react";
import { Button, Space, Table } from "antd";
import { DatePickerComponent } from "../../components/datePicker/DatePickerComponent";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import "./styles.scss";

dayjs.extend(isBetween);

const data = [
  {
    key: "1",
    name: "Александр Иванов",
    age: 34,
    gender: "Мужской",
    profession: "Программист",
    address: "ул. Ленина, 45, Москва",
    dateOfRegistration: "12.05.2023",
  },
  {
    key: "2",
    name: "Марина Петрова",
    age: 27,
    gender: "Женский",
    profession: "Дизайнер",
    address: "ул. Тимирязева, 12, Санкт-Петербург",
    dateOfRegistration: "03.09.2022",
  },
  {
    key: "3",
    name: "Иван Сидоров",
    age: 41,
    gender: "Мужской",
    profession: "Менеджер",
    address: "ул. Гагарина, 9, Новосибирск",
    dateOfRegistration: "15.06.2021",
  },
  {
    key: "4",
    name: "Елена Кузнецова",
    age: 29,
    gender: "Женский",
    profession: "Маркетолог",
    address: "ул. Мира, 5, Казань",
    dateOfRegistration: "19.11.2022",
  },
  {
    key: "5",
    name: "Максим Морозов",
    age: 33,
    gender: "Мужской",
    profession: "Веб-разработчик",
    address: "пр. Победы, 7, Ростов-на-Дону",
    dateOfRegistration: "01.01.2025",
  },
  {
    key: "6",
    name: "Светлана Фёдорова",
    age: 38,
    gender: "Женский",
    profession: "Маркетолог",
    address: "ул. Пушкина, 14, Екатеринбург",
    dateOfRegistration: "01.02.2025",
  },
  {
    key: "7",
    name: "Дмитрий Беляев",
    age: 25,
    gender: "Мужской",
    profession: "Программист",
    address: "ул. Советская, 11, Нижний Новгород",
    dateOfRegistration: "05.08.2023",
  },
  {
    key: "8",
    name: "Анастасия Волкова",
    age: 31,
    gender: "Женский",
    profession: "Менеджер",
    address: "ул. Чапаева, 18, Воронеж",
    dateOfRegistration: "29.12.2022",
  },
  {
    key: "9",
    name: "Роман Смирнов",
    age: 28,
    gender: "Мужской",
    profession: "Системный администратор",
    address: "пр. Ленина, 3, Челябинск",
    dateOfRegistration: "13.09.2022",
  },
  {
    key: "10",
    name: "Ирина Павлова",
    age: 45,
    gender: "Женский",
    profession: "Дизайнер",
    address: "ул. Октябрьская, 21, Самара",
    dateOfRegistration: "10.04.2021",
  },
];
export const ReportsPage = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectedDateStrings, setSelectedDateStrings] = useState([]);

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const columns = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
      filters: [
        {
          text: "Александр",
          value: "Александр",
        },
        {
          text: "Марина",
          value: "Марина",
        },
        {
          text: "Иван",
          value: "Иван",
        },
        {
          text: "Елена",
          value: "Елена",
        },
        {
          text: "Максим",
          value: "Максим",
        },
        {
          text: "Светлана",
          value: "Светлана",
        },
        {
          text: "Дмитрий",
          value: "Дмитрий",
        },
        {
          text: "Анастасия",
          value: "Анастасия",
        },
        {
          text: "Роман",
          value: "Роман",
        },
        {
          text: "Ирина",
          value: "Ирина",
        },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Возраст",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Пол",
      dataIndex: "gender",
      key: "gender",
      filters: [
        {
          text: "Мужской",
          value: "Мужской",
        },
        {
          text: "Женский",
          value: "Женский",
        },
      ],
      filteredValue: filteredInfo.gender || null,
      onFilter: (value, record) => record.gender.includes(value),
      // sorter: (a, b) => a.gender - b.gender,
      sortOrder: sortedInfo.columnKey === "gender" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Профессия",
      dataIndex: "profession",
      key: "profession",
      filters: [
        {
          text: "Программист",
          value: "Программист",
        },
        {
          text: "Дизайнер",
          value: "Дизайнер",
        },
        {
          text: "Менеджер",
          value: "Менеджер",
        },
        {
          text: "Маркетолог",
          value: "Маркетолог",
        },
        {
          text: "Веб-разработчик",
          value: "Веб-разработчик",
        },
        {
          text: "Системный администратор",
          value: "Системный администратор",
        },
      ],
      filteredValue: filteredInfo.profession || null,
      onFilter: (value, record) => record.profession.includes(value),
      sorter: (a, b) => a.profession.length - b.profession.length,
      sortOrder:
        sortedInfo.columnKey === "profession" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address",
      filters: [
        {
          text: "Екатеринбург",
          value: "Екатеринбург",
        },
        {
          text: "Воронеж",
          value: "Воронеж",
        },
        {
          text: "Москва",
          value: "Москва",
        },
        {
          text: "Казань",
          value: "Казань",
        },
        {
          text: "Санкт-Петербург",
          value: "Санкт-Петербург",
        },
        {
          text: "Ростов-на-Дону",
          value: "Ростов-на-Дону",
        },
        {
          text: "Нижний Новгород",
          value: "Нижний Новгород",
        },
        {
          text: "Челябинск",
          value: "Челябинск",
        },
        {
          text: "Самара",
          value: "Самара",
        },
        {
          text: "Новосибирск",
          value: "Новосибирск",
        },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Дата регистрации",
      dataIndex: "dateOfRegistration",
      key: "dateOfRegistration",
    },
  ];

  const [startDate, endDate] = selectedDateStrings?.length
    ? selectedDateStrings.map((date) => dayjs(date))
    : [null, null];

  const filteredData = data.filter((item) => {
    if (!startDate || !endDate) {
      return true;
    }
    const registrationDate = dayjs(item.dateOfRegistration, "DD.MM.YYYY");
    return registrationDate.isBetween(startDate, endDate, null, "[]");
  });

  return (
    <>
      <div className="head-filters-button">
        <Button onClick={setAgeSort}>Возраст сортировки</Button>
        <Button onClick={clearFilters}>Очистить фильтры</Button>
        <Button onClick={clearAll}>Очистить фильтры и сортировщики</Button>
        <div className="date-picker">
          <p>Фильтр по датам регистрации</p>
          <DatePickerComponent
            selectedDateStrings={selectedDateStrings}
            setSelectedDateStrings={setSelectedDateStrings}
          />
        </div>
      </div>
      <div className="table-wrap">
        <Table
          className="table"
          columns={columns}
          dataSource={filteredData}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

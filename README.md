# tesoro-nodejs-backend
1. Clone code
2. Install mysql workbench and create connection with name Local tesoro
3. Create schema with name tesoro DB
4. Create user and grant privilages using below
    mysql -u root -p
    CREATE USER 'tesoro'@'localhost' IDENTIFIED BY 'tesoro@12345';
    GRANT ALL PRIVILEGES ON *.* TO 'tesoro'@'localhost' WITH GRANT OPTION;
    FLUSH PRIVILEGES;
5. Import schema to the DB

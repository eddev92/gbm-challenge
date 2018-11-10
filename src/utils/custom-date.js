var dateFormat = require('dateformat');
dateFormat.i18n = {
    dayNames: [
        'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab',
        'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'
    ],
    monthNames: [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    timeNames: [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
};
class CustomDate extends Date {
    static getSimpleDateFormatMin = (date) => dateFormat(date, 'dd mmm yyyy')
}

export default CustomDate;

import CustomDate from "./custom-date";

class TransformData {
    static getCols(obj) {
        const dateFormated = obj.Fecha.length && CustomDate.getSimpleDateFormatMin(obj.Fecha);
        return [
            {
                label: dateFormated
            },
            {
                label: obj.Porcentaje
            },
            {
                label: obj.Precio
            },
            {
                label: obj.Volumen
            }
        ];
    }
}

export default TransformData;

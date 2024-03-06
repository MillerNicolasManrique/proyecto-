// si n < 5 descuento = 10%         si n >= 5 y n < 10 descuento = 20%      si n >= 10 descuento = 40%
// precio = 11000
Algoritmo detarea
	definir descuento,total,n Como Real
	Escribir "Escribe el numero de computadoras compradas"
	leer n
	total = n * 11000
	si n < 5 Entonces
		descuento = total * .10
	SiNo
		si n < 10 Entonces
			descuento = total * .20
		SiNo
			descuento = total * .40
		FinSi
	FinSi
	Escribir "El total a pagar por ",n," computadoras compradas es: $",total - descuento
	Escribir "El descuento aplicado es: $",descuento
FinAlgoritmo

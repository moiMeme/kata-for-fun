package com.kata.kataforfun.services

import org.springframework.stereotype.Component

@Component
class KataForFunService {

    fun convertNumber(inputNumber: Int): String {

        val result = StringBuilder()

        val divisibleBy3 = inputNumber % 3 == 0
        val divisibleBy5 = inputNumber % 5 == 0

        if (divisibleBy3) {
            result.append("Kata")
        }
        if (divisibleBy5) {
            result.append("For")
        }

        inputNumber.toString().forEach { char ->
            when (char) {
                '3' -> result.append("Kata")
                '5' -> result.append("For")
                '7' -> result.append("Fun")
            }
        }

        return if (result.isEmpty()) inputNumber.toString() else result.toString()
    }

}

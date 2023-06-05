package com.kata.kataforfun.service

import com.kata.kataforfun.services.KataForFunService
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.CsvSource

class KataForFunServiceTest {

    private val kataForFunService = KataForFunService()

    @ParameterizedTest(name = "convertNumber({0}) should return {1}")
    @CsvSource(
            "2, 2",
            "3, KataKata",
            "9, Kata",
            "10, For",
            "31, Kata",
            "52, For",
            "17, Fun",
            "15, KataForFor",
            "357, KataKataForFun"
    )
    fun `convertNumber should return the expected result`(inputNumber: Int, expectedResult: String) {
        val actualResult = kataForFunService.convertNumber(inputNumber)
        assertEquals(expectedResult, actualResult)
    }
}

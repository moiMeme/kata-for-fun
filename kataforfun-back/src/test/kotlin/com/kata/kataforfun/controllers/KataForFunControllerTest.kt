package com.kata.kataforfun.controllers

import com.kata.kataforfun.services.KataForFunService
import org.junit.jupiter.api.Test
import org.mockito.Mockito.mock
import org.mockito.Mockito.`when`
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import org.springframework.test.web.servlet.setup.MockMvcBuilders

class KataForFunControllerTest {

    private val kataForFunService: KataForFunService = mock(KataForFunService::class.java)
    private val kataForFunController = KataForFunController(kataForFunService)
    private val mockMvc: MockMvc = MockMvcBuilders.standaloneSetup(kataForFunController).build()

    @Test
    fun `convertNumber should return result DTO with converted number`() {
        val inputNumber = 15
        val expectedResult = "KataForFor"

        `when`(kataForFunService.convertNumber(inputNumber)).thenReturn(expectedResult)

        mockMvc.perform(get("/kata-for-fun/$inputNumber")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk)
                .andExpect(jsonPath("$.result").value(expectedResult))
    }

}

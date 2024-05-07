package com.jsharper.aiplayground.models;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import main.java.com.jsharper.aiplayground.models.RequestMessageDto;
import lombok.Data;

@Data
@NoArgsConstructor  
@AllArgsConstructor  
public class RequestDto {

    private String model;
    private List<RequestMessageDto> messages;
    
}
package com.jsharper.aiplayground.models;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor  
@AllArgsConstructor  
public class RequestDto {

    private String model;
    private List<RequestMessageDto> messages;
    
}
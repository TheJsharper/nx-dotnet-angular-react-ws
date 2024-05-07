package com.jsharper.aiplayground.models;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@Data
@NoArgsConstructor  
@AllArgsConstructor  
public class RequestMessageDto {
    
    private String role;
    private String content;

}

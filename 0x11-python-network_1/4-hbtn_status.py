#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
Created on thur apr 20 07:02:53 2023

@author: elsaeb
"""
from requests import get


if __name__ == "__main__":
    url = 'https://intranet.hbtn.io/status'
    response = get(url)
    bytes_content = response.text
    string = 'Body response:\n\t- type: {}\n\t- content: {}'.format(
             type(bytes_content), bytes_content)
    print(string)
    
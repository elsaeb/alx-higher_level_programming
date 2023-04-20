#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
Created on thur apr 20 07:02:53 2023

@author: elsaeb
"""
from requests import post
from sys import argv


if __name__ == "__main__":
    url = argv[1]
    email = {'email': argv[2]}
    response = post(url, data=email)
    print(response.text)

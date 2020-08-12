import styled from 'styled-components'

export const StyleDiv = styled.div`
  &.bg-contain{
    width: 100%;
    height: 100%;   
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #dddddd;
  }
  &.container{
    background: cover;
    margin-left: auto;
    margin-right: auto;
  } 
  &.login-form{
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    background-color: #ffffff;
    padding: 15px;
    border: 2px dotted #cccccc;
    border-radius: 10px;
    height: auto;
  }
  &.row{
    margin-top: 5px;
    border: 1px solid #cccccc;
    padding: 0px 0px;
    border: 2px solid #dddddd;
    margin-left: 0px;
    margin-right: 0px;
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin-bottom: 0px;
  }
  .btn-box{
  text-align: right;
  margin-top: 0px;
  }
  .btn-box button{
    margin-top: 10px;
    padding: 7.5px 15px;
    border-radius: 2px;
    background-color: #009999;
    color: #ffffff;
    border: none;
    outline: none;
  }
  .userr-box{
  width: 100%
}
.userr-box input{
  padding: 7.5px 15px;
  width: 100%;
  border: 1px solid #cccccc;
  outline: none;
  margin-top: 0px;
  border: 2px solid #dddddd;
  margin-left: auto;
  }
.row{
  margin-top: 5px;
  padding: 0px 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
}
.passwordr-box{
  width: 100%
}
.passwordr-box input{
  padding: 7.5px 16px;
  width: 100%;
  border: 1px solid #cccccc;
  outline: none;
  margin-top: 0px;
  border: 2px solid #dddddd;
  border-bottom: none;
}
.job-box{
  margin-bottom: 0px;
  width: 100%;
  outline: none;
  margin-top: -20px;
  border-bottom: none;
  padding: 0px;
}
.birth-box{
  width: auto;
  max-width: 150px;
  outline: none;
  height: 30px;
  margin-top: 0px;
  text-align: center;
  border-radius: 3px;
  font-size:15px;
  background-color: rgb(223, 156, 32);
  border-color: rgb(245, 80, 4);
}

.icon{
  padding: 18px 8px;
  margin-top: -2px;
  border: 1px solid #cccccc;
  border: 2px solid #dddddd;
  border-left: none;
  border-bottom: none;
  outline: none;
}
  .inline{
  width: 100%
  }
  &.flex{
  display: inline-flex;
  flex-direction: column;
  text-align:left;
  margin-left:auto
  }
  &.label{
  opacity: 0.7;
  margin-top: -7px;
  }
}
`

export const Styleh1 = styled.h1`
  color: #009999;
  font-size: 20px;
  margin-bottom: 20px;
  &.registerr{
    text-align: left;
    width: 50%;
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-left: 0px;
    background-color: #abe4ae;
  }
  &.loginr{
    text-align: right;
    width: 50%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #646e64;
  }

}
`

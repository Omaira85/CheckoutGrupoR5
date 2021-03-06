import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/checkout.scss';
import { form } from 'react-bootstrap';

const checkout = () => (
    <>
        <Header />
        <div className="checkoutitems">
        <div class="row">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="well well-sm">
                        <form class="form-horizontal" method="post">
                            <fieldset>
                                <h1>Checkout</h1>
                                <div className="ShippingInformation">
                                <div className="Information">
                                <h4>Verifica tu información</h4>
                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input id="fname" name="name" type="text" placeholder="Nombre" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input id="lname" name="name" type="text" placeholder="Apellido" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input id="email" name="email" type="text" placeholder="Email" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input id="phone" name="phone" type="text" placeholder="Teléfono" class="form-control" />
                                    </div>
                                </div>
                                </div>
                                <div className="Information">
                                <h4>Tu vehículo</h4>
                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input type="text" placeholder="Placa" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input type="text" placeholder="Marca" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input type="text" placeholder="Modelo" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                                    <div class="col-md-8">
                                        <input type="text" placeholder="Linea" class="form-control" />
                                    </div>
                                </div>
                                </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <form action="#" class="credit-card-div">
            <div class="panel panel-default" >
                <div class="panel-heading">
                    <span>Pago Tarjeta de Crédito</span>
                    <div class="row ">
                        <div class="col-md-12">
                            <input type="text" class="form-control" placeholder="Introduce el No. de tarjeta" />
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            <span class="help-block text-muted small-font" > CADUCIDAD MES</span>
                            <input type="text" class="form-control" placeholder="MM" />
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            <span class="help-block text-muted small-font" >  CADUCIDAD AÑO</span>
                            <input type="text" class="form-control" placeholder="YY" />
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                            <span class="help-block text-muted small-font" >  CCV</span>
                            <input type="text" class="form-control" placeholder="CCV" />
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-12 pad-adjust">

                            <input type="text" class="form-control" placeholder="Introduce el Titular de la tarjeta" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 pad-adjust">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" checked class="text-muted" /> Guardar esta tarjeta<a href="#">?</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                            <input type="submit" class="cancel" value="CANCELAR" />
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                            <input type="submit" class="confirm" value="CONFIRMAR" />
                        </div>
                    </div>
                </div>
            </div>
            <form>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Transferencia PSE</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>¿Cuál es tu banco?</option>
                <option>Banco Agrario</option>
                <option>Nequi</option>
                <option>Banco AV Villas</option>
                <option>Banco Caja Social</option>
                <option>Scotiabank Colpatria</option>
                <option>Banco Cooperativo Coopcentral</option>
                <option>Banco Davivienda</option>
                <option>Banco De Bogota</option>
                <option>Banco De Occidente</option>
                <option>Banco Falabella</option>
                <option>Banco GNB Sudameris</option>
                <option>Banco Pichincha S.A.</option>
                <option>Banco Popular</option>
                <option>Banco Procredit</option>
                <option>Bancolombia</option>
                <option>Bancoomeva S.A.</option>
                <option>Banco BBVA Colombia S.A.</option>
                <option>Citibank</option>
                <option>Banco Itaú</option>
                <option>Confiar Cooperativa Financiera</option>
                <option>DaviPlata</option>
                <option>DaviPlata</option>
                <option>Banco De Las Microfinanzas Bancamia</option>
                <option>Coltefinanciera</option>
                </select>
            </div>
            </form>
        </form>
        </div>
        <div class="price">
            <h2 className="colxs">Resumen de la compra</h2>
            <ul>
                <li class="item">
                    <span>Producto</span>
                    <span>Subtotal</span>
                </li>
                <li class="item">
                    <span>Soat</span>
                    <span>$490.247</span>
                </li>
                <li class="item">
                    <span>Producto adicional</span>
                    <span>$35.000</span>
                </li>
            </ul>
            <ul>
                <li class="item">
                    <span>Subtotal</span>
                    <span>$525.247</span>
                </li>
                <li class="item">
                    <span>Total</span>
                    <span>$525.247</span>
                </li>
            </ul>
            <div class="form-group">
                <div class="col-md-12 text-center">
                    <button type="button" class="btn btn-danger">Pagar</button>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </div>
    </>
);

export default checkout;
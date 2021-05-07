import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:8080/api/v1/recycleMe/produto')
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/api/v1/recycleMe/produto/${id}`, this.token)
  }

  getByCategoria(categoria: string): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/api/v1/recycleMe/produto/produtoCategoria/${categoria}`)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('http://localhost:8080/api/v1/recycleMe/produto', produto, this.token)
  }
}
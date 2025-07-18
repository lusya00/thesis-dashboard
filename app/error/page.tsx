'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Home, RefreshCw, ArrowLeft, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan-200/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-lg">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Untung Jawa Admin</h1>
          <p className="text-gray-600 text-sm">Dashboard de Administración</p>
        </div>

        {/* Error Card */}
        <Card className="w-full bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 border-4 border-red-100">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-3">
              Error Inesperado
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Lo sentimos, algo salió mal
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8 px-8 pb-8">
            <div className="text-center">
              <p className="text-gray-600 leading-relaxed">
                Ha ocurrido un error inesperado en el sistema. Nuestro equipo técnico ha sido notificado y está trabajando para solucionarlo.
              </p>
            </div>

            {/* Error Code (simulated) */}
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-500 mb-1">Código de Error</p>
              <p className="font-mono text-lg font-semibold text-gray-700">ERR_500</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                onClick={() => router.push('/dashboard')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                size="lg"
              >
                <Home className="w-5 h-5 mr-3" />
                Ir al Dashboard
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  onClick={() => router.back()}
                  variant="outline"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-xl transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>
                
                <Button 
                  onClick={() => window.location.reload()}
                  variant="outline"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-xl transition-all duration-200"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reintentar
                </Button>
              </div>
            </div>

            {/* Support Information */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">
                ¿Necesitas ayuda?
              </p>
              <div className="flex justify-center space-x-4 text-xs text-gray-400">
                <span>📧 soporte@untungjawa.com</span>
                <span>📞 +62 123 456 789</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © 2024 Untung Jawa. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Versión 1.0.0 • Desarrollado con Next.js
          </p>
        </div>
      </div>
    </div>
  );
} 